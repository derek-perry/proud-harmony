import type { Schema, Attribute } from '@strapi/strapi';

export interface EventsDay extends Schema.Component {
  collectionName: 'components_day_days';
  info: {
    displayName: 'Day';
    icon: 'sun';
    description: '';
  };
  attributes: {
    StartTime: Attribute.DateTime & Attribute.Required;
    EndTime: Attribute.DateTime;
    Price: Attribute.String;
    Timezone: Attribute.Relation<
      'events.day',
      'oneToOne',
      'api::timezone.timezone'
    >;
    Location: Attribute.Relation<
      'events.day',
      'oneToOne',
      'api::location.location'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'events.day': EventsDay;
    }
  }
}
