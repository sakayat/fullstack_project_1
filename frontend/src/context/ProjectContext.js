import { createContext, useReducer } from "react";

const initialState = {
  projects: [],
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECT":
      return {
        ...state,
        projects: action.payload,
      };
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload._id
        ),
      };
      case "UPDATE_PROJECT":
        return {
            ...state,
            projects: state.projects.filter(project => project._id === action.payload._id) 
        }

    default:
      return state;
  }
};

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
