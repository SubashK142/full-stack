import React from 'react';
import { Button, Input, Modal } from 'rsuite';
import './style.css'
const selectData = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{marginLeft:'1000px'}}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValue.name}
              onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
            />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValue.email}
              onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValue.password}
              onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
            />
            <br />

            <label htmlFor="textarea">Textarea</label>
            <textarea
              id="textarea"
              name="textarea"
              rows={5}
              value={formValue.textarea}
              onChange={(e) => setFormValue({ ...formValue, textarea: e.target.value })}
            />
            <br />

            <label htmlFor="select">SelectPicker</label>
            <select
              id="select"
              name="select"
              value={formValue.select}
              onChange={(e) => setFormValue({ ...formValue, select: e.target.value })}
            >
              {selectData.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpen}>New User</Button>
    </>
  );
};
