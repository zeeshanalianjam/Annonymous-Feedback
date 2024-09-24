import dbConnect from "@/lib/dbConnect";


export async function POST(request: Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json()
        
    } catch (error) {
        console.error(`
            Error registering user: ${error}
            `);
            
        return Response.json(
            {
                success: false,
                message: "Failed to register user"
            },
            {
                status: 500
            }
        )
        
    }
}