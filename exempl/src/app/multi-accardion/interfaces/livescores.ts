export interface ExampleAccardion {
    data: Datum[];
}

export interface Datum {
    liga_id:   number;
    icon:      string;
    liga_name: string;
    match:     Match[];
}

export interface Match {
    id:          number;
    colors:      Colors;
    scores:      Scores;
    localTeam:   LocalTeamClass;
    visitorTeam: LocalTeamClass;
}

export interface Colors {
    localteam:   Team;
    visitorteam: Team;
}

export interface Team {
    color:      string;
    kit_colors: string;
}

export interface LocalTeamClass {
    data: Data;
}

export interface Data {
    id:                number;
    legacy_id:         number | null;
    name:              string;
    short_code:        null;
    twitter:           null;
    country_id:        number;
    national_team:     boolean;
    founded:           number;
    logo_path:         string;
    venue_id:          number;
    current_season_id: number;
}

export interface Scores {
    localteam_score:       number;
    visitorteam_score:     number;
    localteam_pen_score:   null;
    visitorteam_pen_score: null;
    ht_score:              string;
    ft_score:              string;
    et_score:              null;
    ps_score:              null;
}
