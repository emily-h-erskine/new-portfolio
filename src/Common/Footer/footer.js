import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Add icons to the library
library.add(faLinkedin, faDribbble, faGithub);

export const Footer = () => {
  return (
    <footer id="footer">
      <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="row">
              <div className="col-md-3 widget">
                <h3 className="widget-title">Contact</h3>
                <div className="widget-body">
                  <p>
                    +353 (87) 3323600 <br />
                    <a href="mailto:emilyerskine2002@gmail.com">emilyerskine2002@gmail.com</a><br />
                    <br />
                    Donegal, Ireland
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="row" style={{ textAlign: 'right', padding: '1%' }}>
                <div className="col-md-12 widget">
                <h3 className="widget-title">Follow me</h3>
                <div className="widget-body">
                    <p className="follow-me-icons">
                    <a href="https://www.linkedin.com/in/emily-huong-erskine-290280234">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" />
                    </a>
                    <a href="https://dribbble.com/becauseiamem" style={{ padding: '2%' }}>
                        <FontAwesomeIcon icon={['fab', 'dribbble']} size="1x" />
                    </a>
                    <a href="https://www.github.com/emily-h-erskine">
                        <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
                    </a>
                    </p>
                </div>
                </div>

                <div className="col-md-12 widget">
                    <div className="widget-body">
                    <p className="text-right">
                        Copyright &copy; 2024, Emily-Huong Erskine <br />
                    </p>
                    </div>
                </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};