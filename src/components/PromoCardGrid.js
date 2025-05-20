import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  IconButton,
  Badge,
  Box
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FileCopyIcon from '@mui/icons-material/FileCopy';

import logo1 from '../assets/images/Flipkart-logo.jpg';
import logo2 from '../assets/images/amazon.png';
import logo3 from '../assets/images/myntra.png';
import logo4 from '../assets/images/ajio.png';
import logo5 from '../assets/images/shopsy.webp';

// Add unique links here
const cardsData = [
  { id: 1, logo: logo1, link: 'https://flipkart.com/deals' },
  { id: 2, logo: logo2, link: 'https://amazon.in/offers' },
  { id: 3, logo: logo3, link: 'https://myntra.com/sale' },
  { id: 4, logo: logo4, link: 'https://ajio.com/trending' },
  { id: 5, logo: logo5, link: 'https://shopsy.in/deals' },
];

const PromoCard = ({ logo, link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied!');
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Check this out! ${link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <Card sx={{ maxWidth: 280, mx: 'auto', my: 2 }}>
      <div style={{ position: 'relative' }}>
        <Badge
          badgeContent="SALE"
          color="error"
          sx={{
            position: 'absolute',
            top: 10,
            left: 20,
            zIndex: 2,
          }}
        />
        <IconButton
          sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="100"
          image={logo}
          alt="Brand Logo"
          sx={{
            objectFit: 'contain',
            backgroundColor: '#fff',
            padding: '10px'
          }}
        />
      </div>
      <CardContent>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ textAlign: 'center' }}
        >
          Up to 8% Profit
        </Typography>

        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          fullWidth
          onClick={handleWhatsAppShare}
          sx={{ mb: 1 }}
        >
          Share on WhatsApp
        </Button>

        <Button
          variant="text"
          startIcon={<FileCopyIcon />}
          fullWidth
          onClick={handleCopy}
        >
          Copy Link
        </Button>
      </CardContent>
    </Card>
  );
};

const PromoCardGrid = () => {
  return (
    <>
      {/* Divider Container between slider and promo cards */}
      <Box sx={{ width: '100%', bgcolor: 'green', py: 2, my: 4 }}>
        <Typography variant="h5" align="center" color="white">
          TOP DISCOUNT RETAILERS...
        </Typography>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <PromoCard logo={card.logo} link={card.link} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PromoCardGrid;
