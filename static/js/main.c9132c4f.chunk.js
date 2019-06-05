(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),s=a.n(i),o=a(1),r=a(2),c=a(4),m=a(3),p=a(6),u=a(5),h=function(){function e(t,a,n,l){Object(o.a)(this,e),this.id=t,this.name=a,this.phone=n,this.title=l}return Object(r.a)(e,[{key:"updateName",value:function(e){this.name=e}},{key:"updatePhone",value:function(e){this.phone=e}},{key:"updateTitle",value:function(e){this.title=e}}]),e}(),d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"titleBar"},l.a.createElement("span",{className:"titleText"}," Employees "))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ul",{className:"listContainer"},this.props.employees.map(function(t){return l.a.createElement("li",{className:"listText",key:t.id,onClick:function(){e.props.selectEmployee(t)}}," ",t.name," ")})))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={employee:null,originalEmployee:null,notModified:!0},e.save=e.save.bind(Object(p.a)(e)),e.cancel=e.cancel.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){e.selected!==this.props.selected&&this.setState({employee:Object.assign({},this.props.selected),originalEmployee:this.props.selected,notModified:!0})}},{key:"handleChange",value:function(e,t){this.state.notModified&&this.setState({notModified:!1});var a=Object.assign({},this.state.employee);a[e]=t,this.setState({employee:a})}},{key:"save",value:function(){this.state.originalEmployee.updateName(this.state.employee.name),this.state.originalEmployee.updatePhone(this.state.employee.phone),this.state.originalEmployee.updateTitle(this.state.employee.title),this.setState({notModified:!0}),this.props.refreshList()}},{key:"cancel",value:function(){var e=Object.assign({},this.state.originalEmployee);this.setState({employee:e,notModified:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"infoCard"},this.state.employee?l.a.createElement("div",null,l.a.createElement("span",{id:"employeeID"}," ID: ",this.state.employee.id," "),l.a.createElement("p",{id:"employeeTitle"}," ",this.state.originalEmployee.name," "),l.a.createElement("br",null),l.a.createElement("button",{id:"saveBtn",className:"confirmationButton",disabled:this.state.notModified,onClick:this.save}," ","Save"," "),l.a.createElement("button",{className:"neutralButton",disabled:this.state.notModified,onClick:this.cancel}," ","Cancel"," "),l.a.createElement("br",null),l.a.createElement("span",{className:"placeholderText"}," Name "),l.a.createElement("input",{className:"materialInput",value:this.state.employee.name,onChange:function(t){e.handleChange("name",t.target.value)}}),l.a.createElement("span",{className:"placeholderText"}," Phone Number "),l.a.createElement("input",{className:"materialInput",value:this.state.employee.phone,onChange:function(t){e.handleChange("phone",t.target.value)}}),l.a.createElement("span",{className:"placeholderText"}," Title "),l.a.createElement("input",{className:"materialInput",value:this.state.employee.title,onChange:function(t){e.handleChange("title",t.target.value)}})):l.a.createElement("p",{id:"noEmployee"}," No Employee Selected "))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={employees:[new h(0,"Bernice Ortiz",4824931093,"CEO"),new h(1,"Marnie Barnett",3094812387,"CTO"),new h(2,"Phillip Weaver",7459831843,"Manager"),new h(3,"Teresa Osborne",3841238745,"Director of Engineering"),new h(4,"Dollie Berry",4873459812,"Front-End Developer"),new h(5,"Harriett Williamson",6571249801,"Front-End Developer"),new h(6,"Ruby Estrada",5740923478,"Back-End Developer"),new h(7,"Lou White",8727813498,"Full-Stack Developer"),new h(8,"Eve Sparks",8734567810,"Product Manager"),new h(9,"Lois Brewer",8749823456,"Sales Manager")],selectedEmployee:null},e.selectEmployee=e.selectEmployee.bind(Object(p.a)(e)),e.refresh=e.refresh.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"selectEmployee",value:function(e){this.setState({selectedEmployee:e})}},{key:"refresh",value:function(){this.setState(this.state)}},{key:"render",value:function(){return l.a.createElement("div",{id:"app"},l.a.createElement(d,null),l.a.createElement("div",{className:"main-container"},l.a.createElement(y,{employees:this.state.employees,selectEmployee:this.selectEmployee}),l.a.createElement(E,{selected:this.state.selectedEmployee,refreshList:this.refresh})))}}]),t}(n.Component);a(15);s.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c9132c4f.chunk.js.map