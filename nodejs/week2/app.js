const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    res.json(documents);
  } else {
    const filteredDocuments = documents.filter((doc) => {
      const values = Object.values(doc);
      return values.some((value) => {
        if (typeof value === "string" && value.includes(query)) {
          return true;
        }
      });
    });
      res.json(filteredDocuments);
  }
});
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const document = documents.find((doc) => doc.id === id);

  if (document) {
    res.json(document);
  } else {
    res.status(404).send("Document not found");
  }
});

app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    res.status(400).send("Both 'q' parameter and 'fields' body are not allowed");
  } else if (query) {
    const filteredDocuments = documents.filter((doc) => {
      const values = Object.values(doc);
      return values.some((value) => {
        if (typeof value === "string" && value.includes(query)) {
          return true;
        }
      });
    });

    res.json(filteredDocuments);
  } else if (fields) {
    const filteredDocuments = documents.filter((doc) => {
      return Object.entries(fields).every(([field, value]) => {
        return doc[field] && doc[field].toString() === value.toString();
      });
    });

    res.json(filteredDocuments);
  } else {
    res.json(documents);
  }
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});





