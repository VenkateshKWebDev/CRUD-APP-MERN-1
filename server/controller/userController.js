import User from "../model/userModel.js";

export const create=async(req,res)=>{
    try {
        const userData=new User(req.body);
        if(!userData)
        {
            return res.status(404).json({msg:"User data not found"});
        }
        const saveData=await userData.save();
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getall=async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData)
            {
                return res.status(404).json({msg:"User data not found"});
            }
            res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error:error});
    }
}
export const getOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userData=await User.findById(id)
        if(!userData)
            {
                return res.status(404).json({msg:"User data not found"});
            }
            res.status(200).json(userData)
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}
export const updateOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userData=await User.findById(id)
        if(!userData)
            {
                return res.status(404).json({msg:"User data not found"});
            }
            const UpdatedData=await User.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json({msg:"User updated Successfully"})
        
    } catch (error) {
        res.status(500).json({error:error});
    }
}
export const DeleteOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userData=await User.findById(id)
        if(!userData)
            {
                return res.status(404).json({msg:"User data not found"});
            }
            await User.findByIdAndDelete(id);
            res.status(200).json({msg:"User deleted Successfully"})
    } catch (error) {
        res.status(500).json({error:error});
    }
}