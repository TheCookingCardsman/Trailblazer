module.exports = function(app) {
  const axios = require ('axios');
  var cheerio = require('cheerio');
  let {PythonShell} = require('python-shell');
  var tj = require('@mapbox/togeojson');
  var fs = require('fs');
  var DOMParser = require('xmldom').DOMParser;
  require('dotenv').config();

  app.post('/api/downloadGXP', (req, res) => {
    // Webscraping to obtain GPX file here
    let url = "";

    axios.get(`${req.body.trail_page}`)
      .then(response => {
        $ = cheerio.load(response.data); 

        $('a').each(function() {
          var text = $(this).text();
          var link = $(this).attr('href');
          if (text == "Download GPX File") {
            url = link;
          }
        })
        
        let options = {
          scriptPath: `${process.env.PROJECT_ABSOLUTE_PATH}`,
          args: [url]
        }

        PythonShell.run('webscraping.py', options, function (err, results) {
          if (err) {
            console.log(err);
            return;
          }
        })
        
        res.send('File Downloaded!');
      })
      .catch(err => {
        console.log(err);
      });
  })
  
  app.post('/api/convertGXP', (req, res) => {
    var gpx = new DOMParser().parseFromString(fs.readFileSync(`${process.env.DOWNLOAD_ABSOLUTE_PATH}${req.body.file_name}`, 'utf8'));
    var converted = tj.gpx(gpx);
    console.log(converted);
    res.send(converted);
  })
};
