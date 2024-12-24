import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box>
            <Grid container spacing={2} alignItems="center" className="contact-info">
              <Grid item xs={12} sm={6} className="info-item">
                <EmailIcon fontSize="large" />
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:saneeitas@gmail.com">saneeitas@gmail.com</a>
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="info-item">
                <PhoneIcon fontSize="large" />
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+237033415593">+234 334 15593</a>
                  </p>
                </div>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              href="mailto:saneeitas@gmail.com"
              endIcon={<EmailIcon />}
              sx={{ marginTop: 2 }}
            >
              Send an Email
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
