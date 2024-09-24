import { resend } from '@/lib/resend'
import VerificationEmail from '../../emails/VerificationEmail'
import { ApiResponse } from '@/types/ApiResponse'

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse> {

    try {
        await resend.emails.send({
            from: 'you@example.com',
            to: email,
            subject: 'Mystry message | Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });

         return {
             success: true,
             message: "Verification email sent successfully"
         }

    } catch (emailError) {
        console.log(`
            Failed to send verification email to ${email}.
            Error: ${emailError}
        `)
        
        return{
            success: false,
            message: "Failed to send verification email"
        }

    }
    
}