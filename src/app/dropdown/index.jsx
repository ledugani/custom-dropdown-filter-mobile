import React from "react";
import "./styles.css";

export default function Dropdown({countries}) {
	return <div className="dropdown">
		<div classNAme="control">
			<div className="selected-value">Select country...</div>
			<div className="arrow"></div>
		</div>
		<div classsName="options">
			{countries.map((country) => (
				<div className="option">{country.name}</div>
			))}
		</div>
	</div>
}