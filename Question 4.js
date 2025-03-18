// part 1
//error code
app.get("/user", async (req, res) => {
    const user = await User.findById(req.query.id);
    res.json(user.name);
});

//probably correct code

app.get("/user", async (req, res) => {
    try {
        const user = await User.findById(req.query.id); //chances of user can be null or error in find
        res.json(user.name); //  there is also chance that its accepts object to serialize into json
    } catch (error) {
        res.json({
            error:error.message,
            message:"Please make sure to provide a correct id "
        })
    }
});

// part 2

const handleValidation=(req,res,next)=>{
    const {name, email, password }= req.body
    const errorRes=null
    if(name.length() < 3 || name.length() > 30  ){
        errorRes["NameIssue"]="length should be greater than 3 and less than 30"
    }
    if(password.length() < 6){
        errorRes["PasswordIssue"]="length should be greater than 6"
    }
    if([a-z]@[a-z].com.test(email)){//please ignore regex text
        errorRes["EmailIssue"]="Please provide email in correct format"
    }

    if(errorRes){
        res.json(errorRes)
    }else{
        next()
    }

}