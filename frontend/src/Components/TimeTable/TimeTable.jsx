import React, { useState } from "react";
import {
  EuiAccordion,
  EuiBadge,
  EuiBasicTable,
  EuiDragDropContext,
  EuiDroppable,
  EuiDraggable,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
  EuiSpacer,
  EuiSplitPanel,
  EuiText,
  htmlIdGenerator,
  euiDragDropReorder,
} from "@elastic/eui";

export default function TimeTable() {
  const makeId = htmlIdGenerator();
  const [data, setData] = useState([
    { name: "Chào cờ" },
    { name: "Toán - Tuyền" },
    { name: "Hóa - Tuyền" },
    { name: "Ngữ văn - Tuyền" },
    { name: "Tiếng anh - Tuyền" },
    { name: "Tiếng anh - Dat" },
  ]);

  const makeList = () =>
    data.map((el) => {
      return {
        content: el.name,
        id: makeId(),
      };
    });

  const [list1, setList1] = useState(makeList());
  const [list2, setList2] = useState([
    { rank: 2, period: 1, "10A1": null, "10A2": null, "10A3": null },
    { rank: 2, period: 2, "10A1": null, "10A2": null, "10A3": null },
    { rank: 2, period: 3, "10A1": null, "10A2": null, "10A3": null },
  ]);

  const remove = (rowIndex, columnKey) => {
    console.log(rowIndex, columnKey)
    const updatedList2 = [...list2];
    updatedList2[rowIndex][columnKey] = null;
    setList2(updatedList2);
  };
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    // Nếu kéo thả vào bảng
    if (destination.droppableId.startsWith("TABLE_CELL")) {
      const [rowIndex, columnKey] = destination.droppableId
        .replace("TABLE_CELL_", "")
        .split("_");
      const updatedList2 = [...list2];
      updatedList2[rowIndex][columnKey] = list1[source.index].content;
      setList2(updatedList2);
    } else {
      // Nếu kéo thả trong cùng một danh sách
      const items = euiDragDropReorder(list1, source.index, destination.index);
      setList1(items);
    }
  };

  const columns = [
    { field: "rank", name: "Thứ" },
    { field: "period", name: "Tiết" },
    { field:"10A1",name: "10A1", render: (item, record) => renderDroppableCell(record, "10A1"),width:"150px" },
    { field:"10A2",name: "10A2", render: (item, record) => renderDroppableCell(record, "10A2"),width:"150px" },
    { field:"10A3",name: "10A3", render: (item, record) => renderDroppableCell(record, "10A3"),width:"150px" },
    { field:"10A4",name: "10A4", render: (item, record) => renderDroppableCell(record, "10A4"),width:"150px" },
    { field:"10A5",name: "10A5", render: (item, record) => renderDroppableCell(record, "10A5"),width:"150px" },
    { field:"10A6",name: "10A6", render: (item, record) => renderDroppableCell(record, "10A6"),width:"150px" },
  ];

  const renderDroppableCell = (record, columnKey) => (
    <EuiDroppable
      droppableId={`TABLE_CELL_${list2.indexOf(record)}_${columnKey}`}
      spacing="none"
      style={{height:"30px"}}
    >
      {(record[columnKey] &&    
       <EuiBadge 
        iconType="cross" iconSide="right"
        onClick={() => remove(list2.indexOf(record), columnKey)} 
      >{record[columnKey]}</EuiBadge>) || "-"}
    </EuiDroppable>
  );
console.log(list2)
  return (
    <EuiSplitPanel.Inner grow={false}>
      <EuiAccordion
        id="1"
        buttonContent={<EuiText size="s"><b>Sắp xếp lớp buổi sáng</b></EuiText>}
        arrowDisplay="right"
        initialIsOpen={true}
      >
        <EuiSpacer />
        <EuiFlexGroup>
          <EuiFlexItem grow={2}>
            <EuiFormRow fullWidth>
              <EuiFieldSearch placeholder="Tìm kiếm theo tên giáo viên" fullWidth />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={1}>
            <EuiFormRow fullWidth>
              <EuiSelect
                options={[{ value: "", text: "Chức vụ" }]}
                fullWidth
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer />
        <EuiDragDropContext onDragEnd={onDragEnd}>
            <EuiDroppable droppableId="LIST_1" cloneDraggables={true} spacing="l" grow>
                <EuiFlexGroup gutterSize="none" style={{background:"#C0C0C0"}}>
                    {list1.map(({ content, id }, idx) => (
                    <EuiFlexItem grow={false}>
                        <EuiDraggable key={id} index={idx} draggableId={id} spacing="l">
                            <EuiBadge>{content}</EuiBadge>
                        </EuiDraggable>
                    </EuiFlexItem>
                    ))}
                </EuiFlexGroup>
            </EuiDroppable>
          <EuiBasicTable tableLayout="auto" items={list2} columns={columns} />
        </EuiDragDropContext>
      </EuiAccordion>
    </EuiSplitPanel.Inner>
  );
}
