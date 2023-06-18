import axios from "axios";

const isDev = process.env.node_mode;

const getEndpoint = () => {
    if (isDev) return "http://localhost/api";
    else return "https://goddessanime.com/api";
}

async function getuser(u: string, host: string, req: any, res: any) {

    if (!u) return res.redirect("https://goddessanime.com");

    try {
        const { data } = await axios.get(`${getEndpoint()}/social-name/${u}`)

        if (data.domain !== host) return res.redirect("https://goddessanime.com");

        return res.redirect(`https://goddessanime.com/user/${data.id}`)
    } catch (error) {
        return res.status(500).json({
            error: (error as Error).message,
            status: 404,
            params: req.params,
            query: req.query
        })
    }
    
}


export default getuser