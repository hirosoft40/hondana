// import React, { Component } from 'react';
// import { Col } from "react-flexbox-grid";
// import {
//     DialogContent,
//     TextField,
//     IconButton,
//   } from "@material-ui/core";
// class DailyLogLeft extends Component {
//     state = {  }

//     renderList(){
//         return(                
//         <Col borderColor="primary.main" borderRadius="borderRadius">
//         <DialogContent className="dialog_daily">
//           <TextField
//             required
//             id="logDay"
//             label="Log Date"
//             error={errorText.length > 0 ? true : false}
//             helperText={errorText}
//             onChange={this.handleChange("logDay")}
//             defaultValue={logDay}
//             InputLabelProps={{
//               shrink: true
//             }}
//           />
//           <div className="nums">
//             <TextField
//               autoFocus
//               margin="dense"
//               id="pgRead"
//               label="Pages read "
//               type="number"
//               // error={errorText.length > 0 ? true : false}
//               helperText={errorText}
//               defaultValue={0}
//               onChange={this.handleChange("pgRead")}
//               InputProps={{ inputProps: { min: 0 } }}
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               id="minutesRead"
//               label="Minutes read"
//               type="number"
//               // error={errorText.length > 0 ? true : false}
//               helperText={errorText}
//               defaultValue={0}
//               onChange={this.handleChange("minutesRead")}
//               InputProps={{ inputProps: { min: 0 } }}
//             />
//           </div>

//           <div className="short">
//             <TextField
//               required
//               id="startdate"
//               label="Start Date"
//               onChange={this.handleChange("startDate")}
//               defaultValue={this.state.today}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />
//             <TextField
//               id="enddate"
//               label="End Date"
//               onChange={this.handleChange("endDate")}
//               defaultValue={this.state.today}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />
//           </div>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="journal"
//             label="Journal"
//             multiline={true}
//             rows={3}
//             rowsMax={4}
//             onChange={this.handleChange("journal")}
//             fullWidth
//           />
//         </DialogContent>
//       </Col>
//       )
//     }

//     render() { 
//         return (  );
//     }
// }
 
// export default DailyLogLeft;