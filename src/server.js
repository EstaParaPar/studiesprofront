const app = express();

app.use(express.static(__dirname+'/dist/app'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/app/ndex.html'));
});

app.listen(process.env.PORT || 8080);