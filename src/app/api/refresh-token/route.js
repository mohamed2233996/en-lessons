
export async function GET() {
    const client_id = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const client_secret = process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET;
    const short_lived_token = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

    const url = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${short_lived_token}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.access_token) {
            console.log('✅ Refreshed Access Token:', data.access_token);

            // هنا يمكنك إرسال التوكن إلى قاعدة بيانات أو طباعته للنسخ اليدوي
            return Response.json({
                success: true,
                token: data.access_token,
                expires_in: data.expires_in,
            });
        } else {
            return Response.json({ error: data }, { status: 400 });
        }
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
