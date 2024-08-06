'use client'
import { useState, useEffect, useCallback } from 'react'
import { firestore, auth } from '@/firebase'
import { Box, Typography, Modal, Stack, TextField, Button, Fade, Backdrop } from '@mui/material'
import { collection, getDocs, getDoc, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'

const Navbar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const AddItemModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #fff;
  box-shadow: 24;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const PageContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(#E5FFDE, #BBCBCB);
  padding-top: 80px; /* Adjusted padding to make room for the navbar */
`;

const SearchContainer = styled(Box)`
  display: flex;
  align-items: center;
  max-width: 300px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ListContainer = styled(Box)`
  min-height: 400px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  margin: auto;
  background: #fff;
`;

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#333', // Set your desired background color
  color: '#fff', // Set text color
  '&:hover': {
    backgroundColor: '#555', // Change background on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Increase shadow on hover
  },
}));

const ButtonIcon = styled(Button)`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  font-size: 1.2rem;
  padding: 0;
  margin-left: 0.5rem;
`;

const SearchButton = styled(Button)`
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  font-size: 1.2rem;
  padding: 0;
  margin-left: 0.5rem;
`;

export default function Inventory({ user, handleLogout }) {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchVisible, setSearchVisible] = useState(false) // Manage search bar visibility

  const userInventoryRef = collection(firestore, 'users', user.uid, 'inventory')

  const updateInventory = useCallback(async () => {
    const snapshot = await getDocs(userInventoryRef)
    const inventoryList = []
    snapshot.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    console.log(inventoryList)
  }, [userInventoryRef])

  const addItem = async (item) => {
    if (item.trim() === '') return
    const docRef = doc(userInventoryRef, item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
  }

  const removeItem = async (item) => {
    const docRef = doc(userInventoryRef, item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }

    await updateInventory()
  }

  useEffect(() => {
    updateInventory()
  }, [updateInventory])

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setItemName('')
    setOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addItem(itemName)
      handleClose()
    }
  }

  const generateRecipes = () => {
    const recipes = [
      { name: 'Pasta', ingredients: ['tomato', 'cheese', 'pasta'] },
      { name: 'Salad', ingredients: ['lettuce', 'tomato', 'cucumber'] },
    ];

    const availableIngredients = inventory.map(item => item.name.toLowerCase());

    const matchingRecipes = recipes.filter(recipe =>
      recipe.ingredients.every(ingredient => availableIngredients.includes(ingredient))
    );

    if (matchingRecipes.length > 0) {
      alert(`You can make the following recipes:\n${matchingRecipes.map(r => r.name).join(', ')}`);
    } else {
      alert('No recipes can be made with the current inventory.');
    }
  };

  const filteredInventory = inventory.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <PageContainer>
      <Navbar>
        <Typography variant="h6">NomNomNet</Typography>
        <CustomButton variant="contained" onClick={handleLogout}>
          Logout
        </CustomButton>
      </Navbar>
      <Typography variant="h4">Stockpile</Typography>
      <ButtonIcon onClick={generateRecipes}>Nom?</ButtonIcon>
      <SearchContainer sx={{ display: searchVisible ? 'flex' : 'none' }}>
        <TextField 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search inventory..."
          fullWidth
        />
        <SearchIcon />
      </SearchContainer>
      <Box>
        <SearchButton onClick={() => setSearchVisible(!searchVisible)}>
          <SearchIcon />
        </SearchButton>
        <ButtonIcon onClick={handleOpen}>
          <AddIcon />
        </ButtonIcon>
      </Box>
      <ListContainer>
        {filteredInventory.map((item) => (
          <Stack key={item.name} direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1">{item.name} ({item.quantity})</Typography>
            <Box>
              <ButtonIcon onClick={() => addItem(item.name)}>+</ButtonIcon>
              <ButtonIcon onClick={() => removeItem(item.name)}>-</ButtonIcon>
            </Box>
          </Stack>
        ))}
      </ListContainer>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <AddItemModal>
            <Typography variant="h6">Add Item</Typography>
            <TextField 
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item name"
              fullWidth
              margin="normal"
              onKeyDown={handleKeyDown}
            />
            <Button onClick={() => {
              addItem(itemName)
              handleClose()
            }}>
              Add
            </Button>
          </AddItemModal>
        </Fade>
      </Modal>
    </PageContainer>
  )
}
