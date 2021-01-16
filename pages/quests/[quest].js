import Footer from "../../components/Footer";
import HeadObject from "../../components/Head";
import Nav from "../../components/Nav";
import jwt from 'jsonwebtoken';

export default function Quest(res) {
    return (
        <div>
            <HeadObject />
            <Nav />
            <div>
                {JSON.stringify(res ?? ``)}
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(ctx) {
    if (ctx.res) {
        let questObject = ctx.query;
        let quest = questObject.quest;
        let user = jwt.verify(ctx.req.headers.cookie.substring(6), process.env.JWT_SECRET);
        let level;
        let roles = user.userInfo.roles["SS"];
        if (roles.includes("Beginner")) {
            level = "beginner"
        } else if (roles.includes("Intermediate")) {
            level = "intermediate"
        } else if (roles.includes("Advanced")) {
            level = "advanced"
        }
        return {
            props: {
                quest: quest,
                level: level,
            }
        }
    }
}