export type Payload = {
  name: string;
  id: string;
  type?: string | null;
  reused?: boolean;
  launch: Launch;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg?: number | null;
  mass_lbs?: number | null;
  orbit?: string | null;
  reference_system?: string | null;
  regime?: string | null;
  longitude?: number | null;
  semi_major_axis_km?: number | null;
  eccentricity?: number | null;
  periapsis_km?: number | null;
  apoapsis_km?: number | null;
  inclination_deg?: number | null;
  period_min?: number | null;
  lifespan_years?: number | null;
  epoch?: string | null;
  mean_motion?: number | null;
  raan?: number | null;
  arg_of_pericenter?: number | null;
  mean_anomaly?: number | null;
  dragon?: {
    capsule?: string | null;
    mass_returned_kg?: number | null;
    mass_returned_lbs?: number | null;
    flight_time_sec?: number | null;
    manifest?: string | null;
    water_landing?: boolean | null;
    land_landing?: boolean | null;
  };
};

export type Launch = {
  name: string;
  id: string;
  success: boolean;
  flight_number: number;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  static_fire_date_utc?: string | null;
  static_fire_date_unix?: number | null;
  tdb: boolean;
  net: boolean;
  window?: number | null;
  rocket?: string | null;
  failures: {
    time: number;
    altitude: number;
    reason: string;
  }[];
  upcoming: boolean;
  details?: string | null;
  fairings: {
    reused?: boolean | null;
    recovery_attempt?: boolean | null;
    recovered?: boolean | null;
    ships?: string[];
  };
  crew?: string[];
  ships?: string[];
  capsules?: string[];
  payloads: Payload[];
  launchpad?: string | null;
  cores: {
    core?: string | null;
    flight?: number | null;
    gridfins?: boolean | null;
    legs?: boolean | null;
    reused?: boolean | null;
    landing_attempt?: boolean | null;
    landing_success?: boolean | null;
    landing_type?: string | null;
    landpad?: string | null;
  }[];
  links: {
    patch: {
      small?: string | null;
      large?: string | null;
    };
    reddit: {
      campaign?: string | null;
      launch?: string | null;
      media?: string | null;
      recovery?: string | null;
    };
    flickr: {
      small?: string[];
      original?: string[];
    };
    presskit?: string | null;
    webcast?: string | null;
    youtube_id?: string | null;
    article?: string | null;
    wikipedia?: string | null;
  };
  auto_update: boolean;
};

export type LaunchPad = {
  name?: string | null;
  full_name?: string | null;
  status:
    | "active"
    | "inactive"
    | "unknown"
    | "retired"
    | "lost"
    | "under construction";
  locality?: string | null;
  region?: string | null;
  timezone?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  launch_attempts?: number;
  launch_successes?: number;
  rockets?: Array<string>;
  launches?: Array<string>;
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
  docs: Array<Payload>;
} & PaginationInfo;
