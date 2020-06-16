const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME_CHANGE': {
            return {
                ...state,
                formTitle: action.payload,
            };
        }
        case 'ADD_INPUT': {
            return {
                ...state,
                formData: [...state.formData, action.payload],
            };
        }
        case 'UPDATE_INPUT': {
            let { formData, editable, editableInput } = state;
            editable = true;
            editableInput = action.payload;
            // let input = formData.find((data) => data.id === action.payload.id);
            // input.title = action.payload.title || input.title;
            // input.placdeholder =
            //     action.payload.placdeholder || input.placdeholder;
            // input.helperText = action.payload.helperText || input.helperText;
            // input.isRequired = action.payload.isRequired || input.isRequired;
            // input.data = action.payload.data || input.data;

            return {
                ...state,
                editable,
                editableInput,
                formData,
            };
        }
        case 'UPDATE_REALLY': {
            let { formData, editableInput, editable } = state;
            let deta = formData.find((dd) => dd.id === editableInput);
            deta.title = action.payload.title || deta.title;
            deta.placeholder = action.payload.placeholder || deta.placeholder;
            deta.helperText = action.payload.helperText || deta.helperText;
            deta.isRequired = action.payload.isRequired || deta.isRequired;
            deta.data = action.payload.data || deta.data;
            editable = false;
            editableInput = null;
            //  state = { ...state, formData };
            return {
                ...state,
                editable,
                editableInput,
                formData,
            };
        }
        case 'DELETE_INPUT': {
            let { editable, editableInput } = state;
            if (state.editableInput === action.payload) {
                editable = false;
                editableInput = null;
            }

            let formData = state.formData.filter(
                (d) => d.id !== action.payload
            );
            return {
                ...state,
                editable,
                editableInput,
                formData,
            };
        }
        default:
            return state;
    }
};
export default reducer;
