import Footer from "../../components/Footer";
import HeadObject from "../../components/Head";
import Nav from "../../components/Nav";
import jwt from 'jsonwebtoken';
import { useUser } from '../../lib/hooks'
import ForbiddenPage from '../403'

export default function Quest(res) {
    const user = useUser({ redirectTo: '/login' });

    return (
        <>
            {user && (
                <>
                    {res ?
                        <>
                            <HeadObject />
                            <Nav />
                        </>
                        : ''}
                    <div>
                        {res ? JSON.stringify(res) : <ForbiddenPage />}
                    </div>
                    {res ?
                        <Footer />
                        : ''}
                </>
            )}
        </>
    )
}

export async function getServerSideProps(ctx) {
    if (ctx.res) {
        let questObject = ctx.query;
        let quest = questObject.quest;
        let cookieParams = new URLSearchParams(ctx.req.headers.cookie.replace(/;\s/g, '&'));
        let token = cookieParams.has('token') ? cookieParams.get('token') : '';
        console.log(token);
        let user;
        if (token.length !== 0) {
            user = jwt.verify(token, process.env.JWT_SECRET);
        }
        let level;
        let roles = user.userInfo?.roles["SS"];
        if (roles?.includes("Beginner")) {
            level = "beginner"
        } else if (roles?.includes("Intermediate")) {
            level = "intermediate"
        } else if (roles?.includes("Advanced")) {
            level = "advanced"
        }
        let data;
        if (level.length !== 0) {
            data = await fetch(`https://avatar-tau.vercel.app/api/get?baseid=${process.env.CHALLENGES_AIRTABLE_BASE_ID}&tablename=Challenge%20Data&body={%22filterByFormula%22:%20%22id%20=%20%27${level + quest}%27%22,%22maxRecords%22:%201}`);
            data = await data.json();
            data = data.res[0].fields.data
        }
        return {
            props: {
                quest: quest,
                level: level,
                data: data ? data : 404,
            }
        }
    }
}