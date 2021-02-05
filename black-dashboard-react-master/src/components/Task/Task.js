import React from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";


//A Task is a single data-cell of a table that renders a user's habit and allows them to mark their participation for the day.
const Task = (props) => {

    console.log("PROPS FOR THE TASK", props);

    return (
        <CardBody inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <div className="table-responsive">
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            defaultChecked
                                            defaultValue=""
                                            type="checkbox"
                                        />
                                        <span className="form-check-sign">
                                            <span className="check" />
                                        </span>
                                    </Label>
                                </FormGroup>
                            </td>
                            <td>
                                <p className="title">{props.data.title}</p>
                                <p className="text-muted">
                                    {props.data.description}
                                </p>
                            </td>
                            <td className="td-actions text-right">
                                <Button
                                    color="link"
                                    id="tooltip457194718"
                                    title=""
                                    type="button"
                                >
                                    <i className="tim-icons icon-pencil" />
                                </Button>
                                <UncontrolledTooltip
                                    delay={0}
                                    target="tooltip457194718"
                                    placement="right"
                                >
                                    Edit Task
                                </UncontrolledTooltip>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </CardBody>
    );
};

export default Task;

