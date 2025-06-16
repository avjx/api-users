export function validate(schema){
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        if(!result.success){
            const flattened = result.error.flatten()

            return res.status(400).json({
                errors: flattened.fieldErrors
            })
        }
        req.body = result.data
        next()
    }
}