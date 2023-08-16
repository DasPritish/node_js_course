const express = require("express");

const router = express.Router();


const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 20 },
  isEnrolled :{type : Boolean , default:false},
  Phone :{type : String , require:true , minlength : 10 , maxlength : 25}
});


const Student = mongoose.model('Student', studentSchema);

// const catagory= [
//     { id: 1 , name:'Web'},
//     { id: 2 , name : 'Mobile'},
//     { id: 3 , name:'Photo'},

// ]
//get request
router.get('/', async (req, res) => {
  let student = await Student.find();
  res.send(student);
});

//Post request
router.post('/', async (req, res) => {
  // const {error} = validateData(req.body)
  // if(error) res.status(400).send(error.delails[0].message)
  const student = new Student({
    name: req.body.name,
    Phone: req.body.Phone,
    isEnrolled :req.body.isEnrolled
  });
  await student.save();
  // catagory.push(courseCatagory);
  res.send(student);
});

//put request

router.put("/:id", async (req, res) => {
  const catagory = await Student.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name , Phone : req.body.Phone,isEnrolled : req.body.isEnrolled },
    { new: true }
  );
  // const catagories = catagory.find(c => c.id === parseInt(req.params.id));
  if (!catagory) {
    return res.status(400).send("The catagory with given ID doesnot exit");
  }
  res.send(catagory);
});

// //delete request
// router.delete('/api/catagories' , (req , res)=>{
//     const catagories = catagory.find(c => c.id ===parseInt(req.params.id));
//     if(!catagories) return res.status(404).send('The given ID data is not found')
//     const index = catagory.indexOf(catagories);
//     catagory.splice(index , 1);
//     res.send(catagories)
// });

// //get
// router.get('/api/catagories/:id', (req , res) =>{
//     const catagories = catagory.find(c =>  c.id ===parseInt(req.params.id));
//     if(!catagories) return res.send(404),send('The given ID data is not found')
// });

// //joi validation

function validateData(student) {
  const schema = {
    name: Joi.string().min(3).required(),
    Phone: Joi.string().min(3).required(),
    isEnrolled: Joi.string().min(3).required(),
  };
  return Joi.validate(student, schema);
}

module.exports = router;
