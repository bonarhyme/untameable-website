"use client";
import React from "react";
import { tw } from "../helper/tw";
import { TextBoxWithIcon } from "./text-box-with-icon";
import { Divider } from "../decoration/divider";
import { useTranslation } from "react-i18next";

type Props = {};

export const WeConnect = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-center text-xl md:text-[1.75rem] mb-6 not-prose text-white font-extrabold">
        {t("home:weConnectWith", { defaultValue: "Wij verbinden met:" })}
      </h2>
      <div className=" flex gap-6">
        <TextBoxWithIcon
          iconName="growth"
          subtitle={t("home:growthAndEfficiency.subtitle", {
            defaultValue: "Bedrijven gericht op",
          })}
          title={t("home:growthAndEfficiency.title", {
            defaultValue: "Bedrijven gericht op",
          })}
          text={t("home:growthAndEfficiency.text", {
            defaultValue:
              "Van start-ups tot MKB en daarbuiten—als je wilt groeien en efficiënter wilt werken.",
          })}
        />
        <TextBoxWithIcon
          iconName="idea"
          subtitle={t("home:innovativeIdeas.subtitle", {
            defaultValue: "Organisaties met",
          })}
          title={t("home:innovativeIdea.title", {
            defaultValue: "Innovatieve ideeën",
          })}
          text={t("home:innovativeIdea.text", {
            defaultValue:
              "Voor wie lef heeft en openstaat voor nieuwe inzichten om voorop te blijven lopen.",
          })}
        />

        <TextBoxWithIcon
          iconName="balance"
          subtitle={t("home:focusAndBalance.subtitle", {
            defaultValue: "Teams op zoek naar",
          })}
          title={t("home:focusAndBalance.title", {
            defaultValue: "Focus & Balans",
          })}
          text={t("home:focusAndBalance.text", {
            defaultValue:
              "Voor wie verandering en vernieuwing nastreeft, of het nu gaat om automatisering, digitalisering of verduurzaming.",
          })}
        />
      </div>

      <Divider
        orientation="vertical"
        className={"h-10 mx-auto mt-[3.75rem] mb-[7.5rem]"}
      />
    </section>
  );
};
