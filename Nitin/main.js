const mongoose =require('mongoose');
var mongodb = require('mongodb');

const { Report} =require(process.cwd()+'/models/report');
const bodyParser = require('body-parser');
var alias = '/nd';
module.exports = function(app, router){

var url="mongodb://dbuser:dbuser1@ds161245.mlab.com:61245/assignment_db";

mongoose.connect(url)
    .then((result)=>console.log(`Connected to db `))
    .catch((err)=>console.log(err));
       app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({ extended: true }));


       app.post(alias + '/getReport',(req,res)=>{
           var tempstudentId=req.body.studentId;
           var tempfieldId=req.body.fieldId;
           var d =new Date();           
           let status="Success";
         
        
        var report= new Report({studentId:tempstudentId,fieldId:tempfieldId,Date:d});
            report.save();
            res.send(d);
        });

    

     app.get(alias + '/getAllReports', (req, res) => {
            
             async function getReports(){
                 const report=await Report.find();
                 console.log(report);
                 res.json(report);
             }
             getAllReports();
         
         });
    
    
    
}