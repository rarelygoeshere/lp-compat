import { Client, GatewayIntentBits, Interaction } from "discord.js";
import axios from "axios";
import getFeature from "../featureMap";
import { v4 as uuidv4 } from "uuid";
import util from "util";
const exec = util.promisify(require("child_process").exec);
import insertLine from "insert-line";
import { readFileSync } from "fs";
import { request } from "undici";

const pat = process.env.GH_TOKEN; // Token from Railway Env Variable.
const discordToken = process.env.DISCORD_TOKEN; // Token from Railway Env Variable.

export const isStaff = (interaction) =>
  interaction.member.roles.cache.has("670375841523433472") ||
  interaction.member.id === interaction.guild.ownerId;

export const validatePackage = async (packageId: string) => {
  try {
    await axios.get(
      `https://play.google.com/store/apps/details?id=${packageId}`
    );
  } catch (e) {
    return false;
  }
};

export const processPackage = async (packageParam: string) => {
  let packageId = packageParam;
  // packageId could be a URL, we should handle that properly.
  try {
    var url = new URL(packageId);
    var id = url.searchParams.get("id");
    packageId = id;
  } catch (e) {}
  if (validatePackage(packageId)) return packageId;
  return false;
};

export const processFeatures = (features: string): string[] | false => {
  const featuresArray = features.split("|");

  // Some degree of validation for the features
  try {
    featuresArray.forEach((feature) => {
      const feat = getFeature(feature);
      if (!feat.label) throw new Error();
    });
  } catch (e) {
    return false;
  }

  return featuresArray;
};
