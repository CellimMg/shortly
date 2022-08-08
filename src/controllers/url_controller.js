import {
    create,
    readById,
    readByShortUrl,
    updateVisitCount,
    deleteById,
} from "../repositories/url_repository.js";
import { nanoid } from "nanoid";
import { urlSchema } from "../schemas/url_schema.js";

export async function postUrl(req, res) {
    const { userId } = res.locals.userData;
    const { url } = req.body;
    const shortUrl = nanoid();

    try {
        isValidUrl({ url });
        await create({ userId, url, shortUrl });
        res.status(201).send({ shortUrl });
    } catch (error) {
        console.log(error)
        switch (error) {
            case "UNEXPECTED_ERROR":
                return res.status(500).send({ message: "Ocorreu um erro inesperado! Tente novamente em instantes ou entre em contato com um administrador!" });
            default:
                return res.status(error.code).send({ message: error.message });
        }
    }
}


function isValidUrl(url) {
    const { error } = urlSchema.validate(url);
    if (error) throw { code: 422, message: error.message };
}

export async function getUrl(req, res) {
    const { id } = req.params;
    const response = await readById(id);
    if (response.length === 0) {
        return res.status(404).send("Nenhuma URL correspondente!");
    }

    res.status(200).send(response[0]);
}

export async function redirect(req, res) {
    try {
        const { shortUrl } = req.params;
        const url = await readByShortUrl(shortUrl);
        if (url.length === 0) {
            return res.status(404).send("Esta url não existe!");
        }

        await updateVisitCount(shortUrl);
        return res.redirect(url[0].url);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params;
    try {
        await deleteById(id);
        return res.sendStatus(204);
    } catch {
        return res.sendStatus(500);
    }
}