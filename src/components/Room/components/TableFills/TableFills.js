import React from 'react';

export const TableFillRow = props => {
	return (
		<tr>
			<td className={props.ClassName}>{props.A}</td>
			<td className={props.ClassName}>{props.B}</td>
		</tr>
	);
};