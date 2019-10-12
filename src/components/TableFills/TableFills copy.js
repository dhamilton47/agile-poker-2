import React from 'react';

export const TableHeaderFill = props => {
	return (
		<tr>
			<th className={props.ClassName}>{props.A}</th>
			<th className={props.ClassName}>{props.B}</th>
		</tr>
	);
};

	export const TableDataFill = props => {
	return (
		<tr>
			<td className={props.ClassName}>{props.A}</td>
			<td className={props.ClassName}>{props.B}</td>
		</tr>
	);
};