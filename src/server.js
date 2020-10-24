const app = express();

app.use(express.static(__dirname+'/dist/studiesprofront'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/studiesprofront/index.html'));
});

app.listen(process.env.PORT || 8080);