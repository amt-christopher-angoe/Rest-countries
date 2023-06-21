import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const FILTER_COUNTRIES_BY_REGION = 'FILTER_COUNTRIES_BY_REGION';

export interface Country {
  name: {
    toLowerCase(): unknown;
    common: string;
    nativename: {
      official: string;
    }
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: any;
  };
  subregion: string;
  tld: [];
  currencies: {
    [0]: {}
  };
  languages: {};
  borders: [];
}

export interface FetchCountriesRequestAction {
  type: typeof FETCH_COUNTRIES_REQUEST;
}

export interface FetchCountriesSuccessAction {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
}

export interface FetchCountriesFailureAction {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: string;
}

export interface SearchCountriesAction {
  type: typeof SEARCH_COUNTRIES;
  payload: string;
}

export interface FilterCountriesByRegionAction {
  type: typeof FILTER_COUNTRIES_BY_REGION;
  payload: string;
}

export type CountriesActionTypes =
  | FetchCountriesRequestAction
  | FetchCountriesSuccessAction
  | FetchCountriesFailureAction
  | SearchCountriesAction
  | FilterCountriesByRegionAction;

export const fetchCountries = () => {
  return async (dispatch: Dispatch<CountriesActionTypes>) => {
    try {
      dispatch({ type: FETCH_COUNTRIES_REQUEST });

      const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
      const countries = response.data;

      dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: countries });
    } catch (error: any) {
      dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: error.message });
    }
  };
};

export const searchCountries = (searchText: string): SearchCountriesAction => {
  return {
    type: SEARCH_COUNTRIES,
    payload: searchText,
  };
};

export const filterCountriesByRegion = (region: string): FilterCountriesByRegionAction => {
  return {
    type: FILTER_COUNTRIES_BY_REGION,
    payload: region,
  };
};
