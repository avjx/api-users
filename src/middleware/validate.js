export function validate(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        if(!result.sucess){
            return res.status(400).json({
                erros: result.error.flatten().fieldErrors
            })
        }
        req.body = result.data
        next()
    }
}