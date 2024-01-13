type Payload = {
  name: {
    type: "String";
    default: null;
    unique: true;
  };
  type: {
    type: "String";
    default: null;
  };
  reused: {
    type: "Boolean";
    default: false;
  };
  launch: {
    type: "UUID";
    default: null;
  };
  customers: Array<string>;
  norad_ids: Array<number>;
  nationalities: Array<string>;
  manufacturers: Array<string>;
  mass_kg: {
    type: "Number";
    default: null;
  };
  mass_lbs: {
    type: "Number";
    default: null;
  };
  orbit: {
    type: "String";
    default: null;
  };
  reference_system: {
    type: "String";
    default: null;
  };
  regime: {
    type: "String";
    default: null;
  };
  longitude: {
    type: "Number";
    default: null;
  };
  semi_major_axis_km: {
    type: "Number";
    default: null;
  };
  eccentricity: {
    type: "Number";
    default: null;
  };
  periapsis_km: {
    type: "Number";
    default: null;
  };
  apoapsis_km: {
    type: "Number";
    default: null;
  };
  inclination_deg: {
    type: "Number";
    default: null;
  };
  period_min: {
    type: "Number";
    default: null;
  };
  lifespan_years: {
    type: "Number";
    default: null;
  };
  epoch: {
    type: "String";
    default: null;
  };
  mean_motion: {
    type: "Number";
    default: null;
  };
  raan: {
    type: "Number";
    default: null;
  };
  arg_of_pericenter: {
    type: "Number";
    default: null;
  };
  mean_anomaly: {
    type: "Number";
    default: null;
  };
  dragon: {
    capsule: {
      type: "UUID";
      default: null;
    };
    mass_returned_kg: {
      type: "Number";
      default: null;
    };
    mass_returned_lbs: {
      type: "Number";
      default: null;
    };
    flight_time_sec: {
      type: "Number";
      default: null;
    };
    manifest: {
      type: "String";
      default: null;
    };
    water_landing: {
      type: "Boolean";
      default: null;
    };
    land_landing: {
      type: "Boolean";
      default: null;
    };
  };
};

export type Launch = {
  name: "String";
  id: string;
  flight_number: {
    type: "Number";
    required: true;
  };
  date_utc: {
    type: "String";
    required: true;
  };
  date_unix: {
    type: "Number";
    required: true;
  };
  date_local: {
    type: "String";
    required: true;
  };
  date_precision: {
    type: "String";
    required: true;
    enum: ["half", "quarter", "year", "month", "day", "hour"];
  };
  static_fire_date_utc: {
    type: "String";
    default: null;
  };
  static_fire_date_unix: {
    type: "Number";
    default: null;
  };
  tdb: {
    type: "Boolean";
    default: false;
  };
  net: {
    type: "Boolean";
    default: false;
  };
  window: {
    type: "Number";
    default: null;
  };
  rocket: {
    type: "UUID";
    default: null;
  };
  success: {
    type: "Boolean";
    default: null;
  };
  failures: {
    time: {
      type: "Number";
    };
    altitude: {
      type: "Number";
    };
    reason: {
      type: "String";
    };
  }[];
  upcoming: {
    type: "Boolean";
    required: true;
  };
  details: {
    type: "String";
    default: null;
  };
  fairings: {
    reused: {
      type: "Boolean";
      default: null;
    };
    recovery_attempt: {
      type: "Boolean";
      default: null;
    };
    recovered: {
      type: "Boolean";
      default: null;
    };
    ships: ["UUID"];
  };
  crew: ["UUID"];
  ships: ["UUID"];
  capsules: ["UUID"];
  payloads: Array<Payload>;
  launchpad: {
    type: "UUID";
    default: null;
  };
  cores: {
    core: {
      type: "UUID";
      default: null;
    };
    flight: {
      type: "Number";
      default: null;
    };
    gridfins: {
      type: "Boolean";
      default: null;
    };
    legs: {
      type: "Boolean";
      default: null;
    };
    reused: {
      type: "Boolean";
      default: null;
    };
    landing_attempt: {
      type: "Boolean";
      default: null;
    };
    landing_success: {
      type: "Boolean";
      default: null;
    };
    landing_type: {
      type: "String";
      default: null;
    };
    landpad: {
      type: "UUID";
      default: null;
    };
  }[];
  links: {
    patch: {
      small: {
        type: "String";
        default: null;
      };
      large: {
        type: "String";
        default: null;
      };
    };
    reddit: {
      campaign: {
        type: "String";
        default: null;
      };
      launch: {
        type: "String";
        default: null;
      };
      media: {
        type: "String";
        default: null;
      };
      recovery: {
        type: "String";
        default: null;
      };
    };
    flickr: {
      small: ["String"];
      original: ["String"];
    };
    presskit: {
      type: "String";
      default: null;
    };
    webcast: {
      type: "String";
      default: null;
    };
    youtube_id: {
      type: "String";
      default: null;
    };
    article: {
      type: "String";
      default: null;
    };
    wikipedia: {
      type: "String";
      default: null;
    };
  };
  auto_update: {
    type: "Boolean";
    default: true;
  };
};

type payloadNationalities = {
  nationalities: Array<string>;
  id: string;
};

type PaginationInfo = {
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export type Nationalities = {
  docs: Array<payloadNationalities>;
} & PaginationInfo;

export type PayloadesWithLaunches = {
  docs: Array<Launch>;
} & PaginationInfo;
