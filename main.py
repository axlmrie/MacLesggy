from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def test():
    return {"yes bebe ca marche"}


@app.post("/temperature")
async def temperature():
    return {"donnee temp."}

@app.get("/temperature")
async def temperature():
    return {"donnee temperature"}



@app.post("/humidite")
async def humidite():
    return {"donnee humidite"}

@app.get("/humidite")
async def humidite():
    return {"donnee humidite"}



@app.post("/pression")
async def pression():
    return {"donnee pression"}

@app.get("/pression")
async def pression():
    return {"donnee pression"}


#insert into user ("id_user", "nom", "prénom") values ('', '');
#insert into donnee ("id_donnee", "temperature", "pression", "humidite", "jour", "heure", "minutes") values ('', '');



