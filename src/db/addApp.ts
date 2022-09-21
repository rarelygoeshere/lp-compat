import { executeAppsQuery } from "./util";

const getPlaystoreData = require("../backend/getPlaystoreData");

export default async (app) => {
  await executeAppsQuery(async (appsCollection) => {
    if (await appsCollection.findOne({ appId: app.appId }))
      throw new Error("App already exists!");
    const {
      title,
      summary,
      installs,
      minInstalls,
      price,
      free,
      priceText,
      androidVersion,
      androidVersionText,
      developer,
      developerId,
      genre,
      genreId,
      icon,
      headerImage,
      screenshots,
      adSupported,
      updated,
      version,
      recentChanges,
      url
    } = await getPlaystoreData(app.appId);
    console.info(`adding ${app.appId}`);
    return await appsCollection.insertOne({
      ...app,
      title,
      summary,
      installs,
      minInstalls,
      price,
      free,
      priceText,
      androidVersion,
      androidVersionText,
      developer,
      developerId,
      genre,
      genreId,
      icon,
      headerImage,
      screenshots,
      adSupported,
      updated,
      version,
      recentChanges,
      url
    });
  });

  console.info(`added ${app.appId}`);
};
