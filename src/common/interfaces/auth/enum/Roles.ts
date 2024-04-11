import { IRoleCategoryDetails } from '../base/IRolesDetails';

export enum Roles {
  // User
  SUPER_USER = 'SUPER_USER',
  ADMIN = 'ADMIN',
  BANNED = 'BANNED',
  SUSPENDED = 'SUSPENDED',

  ACCESS_PROFILE = 'ACCESS_PROFILE',
  VIEW_DEVICES = 'VIEW_DEVICES',
  REMOVE_DEVICES = 'REMOVE_DEVICES',
  LOGIN = 'LOGIN',

  // Currency
  CREATE_CURRENCY = 'CREATE_CURRENCY',
  READ_CURRENCY = 'READ_CURRENCY',
  UPDATE_CURRENCY = 'UPDATE_CURRENCY',
  DELETE_CURRENCY = 'DELETE_CURRENCY',
  USE_CURRENCY = 'USE_CURRENCY',

  // Event
  CREATE_EVENT = 'CREATE_EVENT',
  READ_EVENT = 'READ_EVENT',
  UPDATE_EVENT = 'UPDATE_EVENT',
  DELETE_EVENT = 'DELETE_EVENT',
  USE_EVENT = 'USE_EVENT',

  // Language
  CREATE_LANGUAGE = 'CREATE_LANGUAGE',
  READ_LANGUAGE = 'READ_LANGUAGE',
  UPDATE_LANGUAGE = 'UPDATE_LANGUAGE',
  DELETE_LANGUAGE = 'DELETE_LANGUAGE',
  USE_LANGUAGE = 'USE_LANGUAGE',

  // Location
  CREATE_LOCATION = 'CREATE_LOCATION',
  READ_LOCATION = 'READ_LOCATION',
  UPDATE_LOCATION = 'UPDATE_LOCATION',
  DELETE_LOCATION = 'DELETE_LOCATION',
  USE_LOCATION = 'USE_LOCATION',

  // Stay
  CREATE_STAY = 'CREATE_STAY',
  READ_STAY = 'READ_STAY',
  UPDATE_STAY = 'UPDATE_STAY',
  DELETE_STAY = 'DELETE_STAY',
  USE_STAY = 'USE_STAY',

  // Transit
  CREATE_TRANSIT = 'CREATE_TRANSIT',
  READ_TRANSIT = 'READ_TRANSIT',
  UPDATE_TRANSIT = 'UPDATE_TRANSIT',
  DELETE_TRANSIT = 'DELETE_TRANSIT',
  USE_TRANSIT = 'USE_TRANSIT',

  // Trip
  CREATE_TRIP = 'CREATE_TRIP',
  READ_TRIP = 'READ_TRIP',
  UPDATE_TRIP = 'UPDATE_TRIP',
  DELETE_TRIP = 'DELETE_TRIP',
  TRIP_MANAGER = 'TRIP_MANAGER',
  JOIN_TRIP = 'JOIN_TRIP',
  LEAVE_TRIP = 'LEAVE_TRIP',
}

export const DEFAULT_ROLES = [
  // Currency
  Roles.READ_CURRENCY,
  Roles.USE_CURRENCY,

  // Event
  Roles.CREATE_EVENT,
  Roles.READ_EVENT,
  Roles.USE_EVENT,

  // Language
  Roles.READ_LANGUAGE,
  Roles.USE_LANGUAGE,

  // Location
  Roles.READ_LOCATION,
  Roles.USE_LOCATION,

  // Stay
  Roles.CREATE_STAY,
  Roles.READ_STAY,
  Roles.USE_STAY,

  // Transit
  Roles.CREATE_TRANSIT,
  Roles.READ_TRANSIT,
  Roles.USE_TRANSIT,

  // Trip
  Roles.CREATE_TRIP,
  Roles.READ_TRIP,
  Roles.JOIN_TRIP,
  Roles.LEAVE_TRIP,

  // User
  Roles.ACCESS_PROFILE,
  Roles.VIEW_DEVICES,
  Roles.LOGIN,
  Roles.REMOVE_DEVICES,
];

export const ROLES_DETAILS: IRoleCategoryDetails[] = [
  {
    name: 'User',
    description:
      'Account related access levels and can be used for managing your account',
    roles: [
      {
        name: 'Super User',
        description: 'Unrestricted access to all the features',
        role_id: Roles.SUPER_USER,
        active: false,
      },
      {
        name: 'Admin',
        description:
          'Administration to the application including enabling roles to users',
        role_id: Roles.ADMIN,
        active: false,
      },
      {
        name: 'Banned',
        description: 'Permanently restricted access to the application',
        role_id: Roles.BANNED,
        active: false,
      },
      {
        name: 'Suspended',
        description: 'Temporarily restricted access to the application',
        role_id: Roles.SUSPENDED,
        active: false,
      },
      {
        name: 'Access Profile',
        description: 'Access to your profile',
        role_id: Roles.ACCESS_PROFILE,
        active: false,
      },
      {
        name: 'View Devices',
        description: 'View devices linked to your account',
        role_id: Roles.VIEW_DEVICES,
        active: false,
      },
      {
        name: 'Remove Devices',
        description: 'Remove devices linked to your account',
        role_id: Roles.REMOVE_DEVICES,
        active: false,
      },
      {
        name: 'Login',
        description: 'Access to login to the application',
        role_id: Roles.LOGIN,
        active: false,
      },
    ],
  },
  {
    name: 'Currency',
    description: 'A currency is a medium of exchange for goods and services',
    roles: [
      {
        name: 'Create Currency',
        description: 'Create a new currency',
        role_id: Roles.CREATE_CURRENCY,
        active: false,
      },
      {
        name: 'Read Currency',
        description: 'Access to view currencies and their details',
        role_id: Roles.READ_CURRENCY,
        active: false,
      },
      {
        name: 'Update Currency',
        description: 'Update currency details',
        role_id: Roles.UPDATE_CURRENCY,
        active: false,
      },
      {
        name: 'Delete Currency',
        description: 'Delete a currency',
        role_id: Roles.DELETE_CURRENCY,
        active: false,
      },
      {
        name: 'Use Currency',
        description: 'Use currency in your trips',
        role_id: Roles.USE_CURRENCY,
        active: false,
      },
    ],
  },
  {
    name: 'Event',
    description: 'An event is a planned and organized occasion',
    roles: [
      {
        name: 'Create Event',
        description: 'Create a new event',
        role_id: Roles.CREATE_EVENT,
        active: false,
      },
      {
        name: 'Read Event',
        description: 'Access to view events and their details',
        role_id: Roles.READ_EVENT,
        active: false,
      },
      {
        name: 'Update Event',
        description: 'Update event details',
        role_id: Roles.UPDATE_EVENT,
        active: false,
      },
      {
        name: 'Delete Event',
        description: 'Delete an event',
        role_id: Roles.DELETE_EVENT,
        active: false,
      },
      {
        name: 'Use Event',
        description: 'Use event in your trips',
        role_id: Roles.USE_EVENT,
        active: false,
      },
    ],
  },
  {
    name: 'Language',
    description: 'A language is a method of communication between humans',
    roles: [
      {
        name: 'Create Language',
        description: 'Create a new language',
        role_id: Roles.CREATE_LANGUAGE,
        active: false,
      },
      {
        name: 'Read Language',
        description: 'Access to view languages and their details',
        role_id: Roles.READ_LANGUAGE,
        active: false,
      },
      {
        name: 'Update Language',
        description: 'Update language details',
        role_id: Roles.UPDATE_LANGUAGE,
        active: false,
      },
      {
        name: 'Delete Language',
        description: 'Delete a language',
        role_id: Roles.DELETE_LANGUAGE,
        active: false,
      },
      {
        name: 'Use Language',
        description: 'Use language in your trips',
        role_id: Roles.USE_LANGUAGE,
        active: false,
      },
    ],
  },
  {
    name: 'Location',
    description: 'A location is a country, city, place, or position',
    roles: [
      {
        name: 'Create Location',
        description: 'Create a new location',
        role_id: Roles.CREATE_LOCATION,
        active: false,
      },
      {
        name: 'Read Location',
        description: 'Access to view locations and their details',
        role_id: Roles.READ_LOCATION,
        active: false,
      },
      {
        name: 'Update Location',
        description: 'Update location details',
        role_id: Roles.UPDATE_LOCATION,
        active: false,
      },
      {
        name: 'Delete Location',
        description: 'Delete a location',
        role_id: Roles.DELETE_LOCATION,
        active: false,
      },
      {
        name: 'Use Location',
        description: 'Use location in your trips',
        role_id: Roles.USE_LOCATION,
        active: false,
      },
    ],
  },
  {
    name: 'Stay',
    description: 'A stay is a place where one can live or stay',
    roles: [
      {
        name: 'Create Stay',
        description: 'Create a new stay',
        role_id: Roles.CREATE_STAY,
        active: false,
      },
      {
        name: 'Read Stay',
        description: 'Access to view stays and their details',
        role_id: Roles.READ_STAY,
        active: false,
      },
      {
        name: 'Update Stay',
        description: 'Update stay details',
        role_id: Roles.UPDATE_STAY,
        active: false,
      },
      {
        name: 'Delete Stay',
        description: 'Delete a stay',
        role_id: Roles.DELETE_STAY,
        active: false,
      },
      {
        name: 'Use Stay',
        description: 'Use stay in your trips',
        role_id: Roles.USE_STAY,
        active: false,
      },
    ],
  },
  {
    name: 'Transit',
    description: 'A transit is a way of transporting people or goods',
    roles: [
      {
        name: 'Create Transit',
        description: 'Create a new transit',
        role_id: Roles.CREATE_TRANSIT,
        active: false,
      },
      {
        name: 'Read Transit',
        description: 'Access to view transits and their details',
        role_id: Roles.READ_TRANSIT,
        active: false,
      },
      {
        name: 'Update Transit',
        description: 'Update transit details',
        role_id: Roles.UPDATE_TRANSIT,
        active: false,
      },
      {
        name: 'Delete Transit',
        description: 'Delete a transit',
        role_id: Roles.DELETE_TRANSIT,
        active: false,
      },
      {
        name: 'Use Transit',
        description: 'Use transit in your trips',
        role_id: Roles.USE_TRANSIT,
        active: false,
      },
    ],
  },
  {
    name: 'Trip',
    description: 'A trip is a journey or excursion, especially for pleasure',
    roles: [
      {
        name: 'Create Trip',
        description: 'Create a new trip',
        role_id: Roles.CREATE_TRIP,
        active: false,
      },
      {
        name: 'Read Trip',
        description: 'Access to view trips and their details',
        role_id: Roles.READ_TRIP,
        active: false,
      },
      {
        name: 'Update Trip',
        description: 'Update trip details',
        role_id: Roles.UPDATE_TRIP,
        active: false,
      },
      {
        name: 'Delete Trip',
        description: 'Delete a trip',
        role_id: Roles.DELETE_TRIP,
        active: false,
      },
      {
        name: 'Trip Manager',
        description: 'Manage a trip',
        role_id: Roles.TRIP_MANAGER,
        active: false,
      },
      {
        name: 'Join Trip',
        description: 'Join a trip',
        role_id: Roles.JOIN_TRIP,
        active: false,
      },
      {
        name: 'Leave Trip',
        description: 'Leave a trip',
        role_id: Roles.LEAVE_TRIP,
        active: false,
      },
    ],
  },
];
