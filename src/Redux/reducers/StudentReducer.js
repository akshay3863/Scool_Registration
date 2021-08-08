import {
  CREATE_STUDENT,
  UPDATE_STUDENT,
  SHORT_STUDENT_BY_DOB,
  FILTER_STUDENT_BY_GENDER,
  DELETE_STUDENT,
} from "../Action/types";

const intialState = {
  StudentsData: [
    {
      id: 1,
      FullName: "Akshay Solanki",
      CollageName: "SRK",
      Year: "March/2021",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "male",
      DOB: "18/04/1999",
    },
    {
      id: 2,
      FullName: "Vivek maru",
      CollageName: "DRB",
      Year: "March/2020",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "female",
      DOB: "21/07/1970",
    },
    {
      id: 3,
      FullName: "Mayur solanki",
      CollageName: "PTSCI",
      Year: "March/2018",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "male",
      DOB: "21/07/1990",
    },
    {
      id: 4,
      FullName: "Anisha Polara",
      CollageName: "PTSCI",
      Year: "March/2018",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "female",
      DOB: "21/07/2000",
    },
  ],
  filteredItems: [
    {
      id: 1,
      FullName: "Akshay Solanki",
      CollageName: "SRK",
      Year: "March/2021",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "male",
      DOB: "18/04/1999",
    },
    {
      id: 2,
      FullName: "Vivek maru",
      CollageName: "DRB",
      Year: "March/2020",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "female",
      DOB: "21/07/1970",
    },
    {
      id: 3,
      FullName: "Mayur solanki",
      CollageName: "PTSCI",
      Year: "March/2018",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "male",
      DOB: "21/07/1990",
    },
    {
      id: 4,
      FullName: "Anisha Polara",
      CollageName: "PTSCI",
      Year: "March/2018",
      Address: "Surat, Gujarat",
      BranchName: "VNSGU",
      Gender: "female",
      DOB: "21/07/2000",
    },
  ],
};

export const StudentReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      return {
        ...state,
        StudentsData: [...state.StudentsData, action.payload],
        filteredItems: [...state.StudentsData, action.payload],
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        StudentsData: state.StudentsData.map((StudentData) =>
          StudentData.id === action.payload.id ? action.payload : StudentData
        ),
        filteredItems: state.filteredItems.map((StudentData) =>
          StudentData.id === action.payload.id ? action.payload : StudentData
        ),
      };
    case FILTER_STUDENT_BY_GENDER:
      return {
        ...state,
        StudentsData:
          action.payload === ""
            ? state.filteredItems
            : state.filteredItems.filter(
                (StudentsData) => StudentsData.Gender === action.payload
              ),
      };
    case DELETE_STUDENT:
      return {
        ...state,
        StudentsData: state.StudentsData.filter(
          (StudentData) => StudentData.id !== action.payload
        ),
        filteredItems: state.filteredItems.filter(
          (StudentData) => StudentData.id !== action.payload
        ),
      };
    case SHORT_STUDENT_BY_DOB:
      let sortedDate = [...state.filteredItems];
      return {
        ...state,
        StudentsData:
          action.payload === ""
            ? sortedDate.sort((a, b) => (a.id > b.id ? 1 : -1))
            : action.payload === "Low"
            ? sortedDate.sort((a, b) =>
                a.DOB.split("/").reverse().join("") >
                b.DOB.split("/").reverse().join("")
                  ? 1
                  : a.DOB.split("/").reverse().join("") <
                    b.DOB.split("/").reverse().join("")
                  ? -1
                  : 0
              )
            : sortedDate.sort((a, b) =>
                a.DOB.split("/").reverse().join("") <
                b.DOB.split("/").reverse().join("")
                  ? 1
                  : a.DOB.split("/").reverse().join("") >
                    b.DOB.split("/").reverse().join("")
                  ? -1
                  : 0
              ),
      };

    default:
      return state;
  }
};
