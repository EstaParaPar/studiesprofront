const app = express();

app.use(express.static(__dirname+'/dist/sp'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/sp/index.html'));
});

app.listen(process.env.PORT || 8080);