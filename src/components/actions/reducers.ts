import {
    Country,
    CountriesActionTypes,
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_FAILURE,
    SEARCH_COUNTRIES,
    FILTER_COUNTRIES_BY_REGION,
  } from './actions';
  
  export interface AppState {
    countries: Country[];
    filteredCountries: Country[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: AppState = {
    countries: [],
    filteredCountries: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action: CountriesActionTypes): AppState => {
    switch (action.type) {
      case FETCH_COUNTRIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_COUNTRIES_SUCCESS:
        return {
          ...state,
          countries: action.payload,
          filteredCountries: action.payload,
          loading: false,
        };
      case FETCH_COUNTRIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SEARCH_COUNTRIES:
        const searchText = action.payload.toLowerCase();
        const filteredCountries = state.countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchText)
        );
        return {
          ...state,
          filteredCountries,
        };
      case FILTER_COUNTRIES_BY_REGION:
        const region = action.payload;
        const filteredCountriesByRegion = state.countries.filter((country) =>
          country.region.toLowerCase() === region.toLowerCase()
        );
        return {
          ...state,
          filteredCountries: filteredCountriesByRegion,
        };
      default:
        return state;
    }
  };
  
 
  export default rootReducer;
  