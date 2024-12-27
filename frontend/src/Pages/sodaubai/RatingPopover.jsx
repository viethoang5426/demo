import React, { useState } from "react";
import { EuiPopover, EuiFormControlLayout, EuiFieldText, EuiSelectable } from "@elastic/eui";

export default function RatingPopover({ selected, onRatingChange }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [options, setOptions] = useState([
    { label: "Xếp loại",},
    { label: "Tốt", checked: selected === "Tốt" ? "on" : undefined },
    { label: "Khá", checked: selected === "Khá" ? "on" : undefined },
    { label: "Trung bình", checked: selected === "Trung bình" ? "on" : undefined },
    { label: "Yếu", checked: selected === "Yếu" ? "on" : undefined },
  ]);

  const togglePopover = () => setIsPopoverOpen((open) => !open);
  const closePopover = () => setIsPopoverOpen(false);

  const handleSelectionChange = (updatedOptions) => {
    setOptions(updatedOptions);
    const selectedOption = updatedOptions.find((option) => option.checked === "on");
    if (selectedOption) {
      onRatingChange(selectedOption.label); // Gửi giá trị đã chọn ra ngoài
    }
  };

  return (
    <EuiPopover
      isOpen={isPopoverOpen}
      closePopover={closePopover}
      panelStyle={{ width: "400px" }}
      button={
        <EuiFormControlLayout onClick={togglePopover} isDropdown>
          <EuiFieldText value={options.find((o) => o.checked === "on")?.label || "Chọn xếp loại"} readOnly />
        </EuiFormControlLayout>
      }
    >
      <EuiSelectable
        singleSelection
        options={options}
        onChange={handleSelectionChange}
      >
        {(list) => <>{list}</>}
      </EuiSelectable>
    </EuiPopover>
  );
}
