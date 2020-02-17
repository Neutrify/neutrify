/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  billingAddressCity?: string | null;
  billingAddressHouseNo?: string | null;
  billingAddressPostalCode?: string | null;
  billingAddressStreet?: string | null;
  email: string;
  freeTrial: boolean;
  freeTrialStartDate: string;
  freeTrialEndDate: string;
  id?: string | null;
  isPremium: boolean;
  isActive?: boolean | null;
  lastLogin?: string | null;
  ownerId?: string | null;
  premiumEndDate?: string | null;
  premiumIsExpiring?: boolean | null;
  premiumStartDate?: string | null;
  feedbackDiscovery?: string | null;
  feedbackLeaveReason?: string | null;
  feedbackPromoterScore?: number | null;
  userConfigId?: string | null;
};

export type UpdateUserInput = {
  billingAddressCity?: string | null;
  billingAddressHouseNo?: string | null;
  billingAddressPostalCode?: string | null;
  billingAddressStreet?: string | null;
  email?: string | null;
  freeTrial?: boolean | null;
  freeTrialStartDate?: string | null;
  freeTrialEndDate?: string | null;
  id: string;
  isPremium?: boolean | null;
  isActive?: boolean | null;
  lastLogin?: string | null;
  ownerId?: string | null;
  premiumEndDate?: string | null;
  premiumIsExpiring?: boolean | null;
  premiumStartDate?: string | null;
  feedbackDiscovery?: string | null;
  feedbackLeaveReason?: string | null;
  feedbackPromoterScore?: number | null;
  userConfigId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateConfigInput = {
  id?: string | null;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  ownerId?: string | null;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: string;
  topicsToExclude: string;
  savedArticleIds?: Array<string> | null;
  sourcesToInclude: Array<string | null>;
  sourcesToExclude: Array<string | null>;
  locationsToInclude: Array<string | null>;
  locationsToExclude: Array<string | null>;
  configUserId?: string | null;
};

export type UpdateConfigInput = {
  id: string;
  keywordsToInclude?: Array<string | null> | null;
  keywordsToExclude?: Array<string | null> | null;
  ownerId?: string | null;
  qualityUpperRange?: number | null;
  qualityLowerRange?: number | null;
  toneUpperRange?: number | null;
  toneLowerRange?: number | null;
  topicsToInclude?: string | null;
  topicsToExclude?: string | null;
  savedArticleIds?: Array<string> | null;
  sourcesToInclude?: Array<string | null> | null;
  sourcesToExclude?: Array<string | null> | null;
  locationsToInclude?: Array<string | null> | null;
  locationsToExclude?: Array<string | null> | null;
  configUserId?: string | null;
};

export type DeleteConfigInput = {
  id?: string | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelArticleFilterInput = {
  authors?: ModelStringFilterInput | null;
  body?: ModelStringFilterInput | null;
  dataType?: ModelStringFilterInput | null;
  date?: ModelStringFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  datePublished?: ModelStringFilterInput | null;
  displayAuthors?: ModelStringFilterInput | null;
  displayKeywords?: ModelStringFilterInput | null;
  displaySourceCountry?: ModelStringFilterInput | null;
  displaySourceTitle?: ModelStringFilterInput | null;
  displayTopics?: ModelStringFilterInput | null;
  eventUri?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  image?: ModelStringFilterInput | null;
  keywords?: ModelStringFilterInput | null;
  language?: ModelStringFilterInput | null;
  quality?: ModelIntFilterInput | null;
  share?: ModelIntFilterInput | null;
  similarity?: ModelFloatFilterInput | null;
  time?: ModelStringFilterInput | null;
  sourceCountry?: ModelStringFilterInput | null;
  sourceRanking?: ModelIntFilterInput | null;
  sourceTitle?: ModelStringFilterInput | null;
  title?: ModelStringFilterInput | null;
  tone?: ModelFloatFilterInput | null;
  topics?: ModelStringFilterInput | null;
  uri?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  wordCount?: ModelIntFilterInput | null;
  and?: Array<ModelArticleFilterInput | null> | null;
  or?: Array<ModelArticleFilterInput | null> | null;
  not?: ModelArticleFilterInput | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelUserFilterInput = {
  billingAddressCity?: ModelStringFilterInput | null;
  billingAddressHouseNo?: ModelStringFilterInput | null;
  billingAddressPostalCode?: ModelStringFilterInput | null;
  billingAddressStreet?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  freeTrial?: ModelBooleanFilterInput | null;
  freeTrialStartDate?: ModelStringFilterInput | null;
  freeTrialEndDate?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  isPremium?: ModelBooleanFilterInput | null;
  isActive?: ModelBooleanFilterInput | null;
  lastLogin?: ModelStringFilterInput | null;
  ownerId?: ModelStringFilterInput | null;
  premiumEndDate?: ModelStringFilterInput | null;
  premiumIsExpiring?: ModelBooleanFilterInput | null;
  premiumStartDate?: ModelStringFilterInput | null;
  feedbackDiscovery?: ModelStringFilterInput | null;
  feedbackLeaveReason?: ModelStringFilterInput | null;
  feedbackPromoterScore?: ModelIntFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelConfigFilterInput = {
  id?: ModelIDFilterInput | null;
  keywordsToInclude?: ModelStringFilterInput | null;
  keywordsToExclude?: ModelStringFilterInput | null;
  ownerId?: ModelStringFilterInput | null;
  qualityUpperRange?: ModelFloatFilterInput | null;
  qualityLowerRange?: ModelFloatFilterInput | null;
  toneUpperRange?: ModelFloatFilterInput | null;
  toneLowerRange?: ModelFloatFilterInput | null;
  topicsToInclude?: ModelStringFilterInput | null;
  topicsToExclude?: ModelStringFilterInput | null;
  savedArticleIds?: ModelIDFilterInput | null;
  sourcesToInclude?: ModelStringFilterInput | null;
  sourcesToExclude?: ModelStringFilterInput | null;
  locationsToInclude?: ModelStringFilterInput | null;
  locationsToExclude?: ModelStringFilterInput | null;
  and?: Array<ModelConfigFilterInput | null> | null;
  or?: Array<ModelConfigFilterInput | null> | null;
  not?: ModelConfigFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  billingAddressCity: string | null;
  billingAddressHouseNo: string | null;
  billingAddressPostalCode: string | null;
  billingAddressStreet: string | null;
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrialStartDate: string;
  freeTrialEndDate: string;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  ownerId: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  billingAddressCity: string | null;
  billingAddressHouseNo: string | null;
  billingAddressPostalCode: string | null;
  billingAddressStreet: string | null;
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrialStartDate: string;
  freeTrialEndDate: string;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  ownerId: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  billingAddressCity: string | null;
  billingAddressHouseNo: string | null;
  billingAddressPostalCode: string | null;
  billingAddressStreet: string | null;
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrialStartDate: string;
  freeTrialEndDate: string;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  ownerId: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type CreateConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  ownerId: string | null;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: string;
  topicsToExclude: string;
  savedArticleIds: Array<string> | null;
  sourcesToInclude: Array<string | null>;
  sourcesToExclude: Array<string | null>;
  locationsToInclude: Array<string | null>;
  locationsToExclude: Array<string | null>;
  user: {
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null;
};

export type UpdateConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  ownerId: string | null;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: string;
  topicsToExclude: string;
  savedArticleIds: Array<string> | null;
  sourcesToInclude: Array<string | null>;
  sourcesToExclude: Array<string | null>;
  locationsToInclude: Array<string | null>;
  locationsToExclude: Array<string | null>;
  user: {
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null;
};

export type DeleteConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  ownerId: string | null;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: string;
  topicsToExclude: string;
  savedArticleIds: Array<string> | null;
  sourcesToInclude: Array<string | null>;
  sourcesToExclude: Array<string | null>;
  locationsToInclude: Array<string | null>;
  locationsToExclude: Array<string | null>;
  user: {
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null;
};

export type GetArticleQuery = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type ListArticlesQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  billingAddressCity: string | null;
  billingAddressHouseNo: string | null;
  billingAddressPostalCode: string | null;
  billingAddressStreet: string | null;
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrialStartDate: string;
  freeTrialEndDate: string;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  ownerId: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetConfigQuery = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  ownerId: string | null;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: string;
  topicsToExclude: string;
  savedArticleIds: Array<string> | null;
  sourcesToInclude: Array<string | null>;
  sourcesToExclude: Array<string | null>;
  locationsToInclude: Array<string | null>;
  locationsToExclude: Array<string | null>;
  user: {
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null;
};

export type ListConfigsQuery = {
  __typename: "ModelConfigConnection";
  items: Array<{
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type ArticlesByDateQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
  } | null> | null;
  nextToken: string | null;
};

export type UserByOwnerQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    billingAddressCity: string | null;
    billingAddressHouseNo: string | null;
    billingAddressPostalCode: string | null;
    billingAddressStreet: string | null;
    config: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      ownerId: string | null;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: string;
      topicsToExclude: string;
      savedArticleIds: Array<string> | null;
      sourcesToInclude: Array<string | null>;
      sourcesToExclude: Array<string | null>;
      locationsToInclude: Array<string | null>;
      locationsToExclude: Array<string | null>;
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrialStartDate: string;
    freeTrialEndDate: string;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    ownerId: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type ConfigByOwnerQuery = {
  __typename: "ModelConfigConnection";
  items: Array<{
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    ownerId: string | null;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: string;
    topicsToExclude: string;
    savedArticleIds: Array<string> | null;
    sourcesToInclude: Array<string | null>;
    sourcesToExclude: Array<string | null>;
    locationsToInclude: Array<string | null>;
    locationsToExclude: Array<string | null>;
    user: {
      __typename: "User";
      billingAddressCity: string | null;
      billingAddressHouseNo: string | null;
      billingAddressPostalCode: string | null;
      billingAddressStreet: string | null;
      email: string;
      freeTrial: boolean;
      freeTrialStartDate: string;
      freeTrialEndDate: string;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      ownerId: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrialStartDate
          freeTrialEndDate
          id
          isPremium
          isActive
          lastLogin
          ownerId
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrialStartDate
          freeTrialEndDate
          id
          isPremium
          isActive
          lastLogin
          ownerId
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrialStartDate
          freeTrialEndDate
          id
          isPremium
          isActive
          lastLogin
          ownerId
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateConfig(input: CreateConfigInput): Promise<CreateConfigMutation> {
    const statement = `mutation CreateConfig($input: CreateConfigInput!) {
        createConfig(input: $input) {
          __typename
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          user {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigMutation>response.data.createConfig;
  }
  async UpdateConfig(input: UpdateConfigInput): Promise<UpdateConfigMutation> {
    const statement = `mutation UpdateConfig($input: UpdateConfigInput!) {
        updateConfig(input: $input) {
          __typename
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          user {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigMutation>response.data.updateConfig;
  }
  async DeleteConfig(input: DeleteConfigInput): Promise<DeleteConfigMutation> {
    const statement = `mutation DeleteConfig($input: DeleteConfigInput!) {
        deleteConfig(input: $input) {
          __typename
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          user {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigMutation>response.data.deleteConfig;
  }
  async GetArticle(id: string, uri: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!, $uri: String!) {
        getArticle(id: $id, uri: $uri) {
          __typename
          authors
          body
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      uri
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArticleQuery>response.data.getArticle;
  }
  async ListArticles(
    id?: string,
    uri?: ModelStringKeyConditionInput,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticlesQuery> {
    const statement = `query ListArticles($id: ID, $uri: ModelStringKeyConditionInput, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticles(id: $id, uri: $uri, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            authors
            body
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (uri) {
      gqlAPIServiceArguments.uri = uri;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticlesQuery>response.data.listArticles;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrialStartDate
          freeTrialEndDate
          id
          isPremium
          isActive
          lastLogin
          ownerId
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetConfig(id: string): Promise<GetConfigQuery> {
    const statement = `query GetConfig($id: ID!) {
        getConfig(id: $id) {
          __typename
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          user {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConfigQuery>response.data.getConfig;
  }
  async ListConfigs(
    filter?: ModelConfigFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConfigsQuery> {
    const statement = `query ListConfigs($filter: ModelConfigFilterInput, $limit: Int, $nextToken: String) {
        listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConfigsQuery>response.data.listConfigs;
  }
  async ArticlesByDate(
    dataType?: string,
    datePublished?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ArticlesByDateQuery> {
    const statement = `query ArticlesByDate($dataType: String, $datePublished: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String) {
        articlesByDate(dataType: $dataType, datePublished: $datePublished, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            authors
            body
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (dataType) {
      gqlAPIServiceArguments.dataType = dataType;
    }
    if (datePublished) {
      gqlAPIServiceArguments.datePublished = datePublished;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ArticlesByDateQuery>response.data.articlesByDate;
  }
  async UserByOwner(
    ownerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByOwnerQuery> {
    const statement = `query UserByOwner($ownerId: String, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        userByOwner(ownerId: $ownerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            config {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
            }
            email
            freeTrial
            freeTrialStartDate
            freeTrialEndDate
            id
            isPremium
            isActive
            lastLogin
            ownerId
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ownerId) {
      gqlAPIServiceArguments.ownerId = ownerId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UserByOwnerQuery>response.data.userByOwner;
  }
  async ConfigByOwner(
    ownerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelConfigFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ConfigByOwnerQuery> {
    const statement = `query ConfigByOwner($ownerId: String, $sortDirection: ModelSortDirection, $filter: ModelConfigFilterInput, $limit: Int, $nextToken: String) {
        configByOwner(ownerId: $ownerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            user {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              email
              freeTrial
              freeTrialStartDate
              freeTrialEndDate
              id
              isPremium
              isActive
              lastLogin
              ownerId
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ownerId) {
      gqlAPIServiceArguments.ownerId = ownerId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ConfigByOwnerQuery>response.data.configByOwner;
  }
}