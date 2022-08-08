import { readUserUrls, readUser } from "../repositories/users_repository.js";

export async function getUserStats(req, res) {
    const id = res.locals.userData.userId;
    const urls = await readUserUrls(id);
    const user = await readUser(id);
    const visitCount = user.visitCount;
    user.visitCount = Number(visitCount);
    const response = {
        ...user,
        shortenedUrls: urls,
    };
    res.status(200).send(response);
}