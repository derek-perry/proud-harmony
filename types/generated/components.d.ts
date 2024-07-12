import type { Schema, Attribute } from '@strapi/strapi';

export interface DayDay extends Schema.Component {
  collectionName: 'components_day_days';
  info: {
    displayName: 'Day';
    icon: 'sun';
  };
  attributes: {
    StartTime: Attribute.DateTime & Attribute.Required;
    EndTime: Attribute.DateTime;
    Price: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'day.day': DayDay;
    }
  }
}
