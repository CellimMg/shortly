import { readUserUrls, readUser } from "../repositories/users_repository.js";

export async function getUserStats(req, res) {
    try {
        const { userId } = res.locals.userData;
        console.log(res.locals.userData);
        const urls = await readUserUrls(userId);
        const user = (await readUser(userId)) ?? {};

        const visitCount = user ? user.visitCount : 0;
        user.visitCount = Number(visitCount);
        const response = {
            ...user,
            shortenedUrls: urls,
        };
        return res.status(200).send(response);
    } catch (error) {
        return res.sendStatus(500);
    }
}