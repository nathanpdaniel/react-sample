export const required = value => value ? undefined : 'Input required';
export const mustBeWholeNumber = value => value % 1 === 0 ? undefined : 'Value must be a whole number';
export const mustBeGreaterThan = minimum => value => value > minimum ? undefined : `Value must be greater than ${minimum}`;
export const mustBeNumeric = value => value && Number.isNaN(Number(value)) ? 'Value must be numeric' : undefined;