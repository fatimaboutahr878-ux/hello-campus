import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// --- TP2 guidée (Notes) ---
const etudiants = [
  { id: 1, nom: 'Amine', note: 16 },
  { id: 2, nom: 'Youssef', note: 8 },
  { id: 3, nom: 'Salma', note: 14 },
  { id: 4, nom: 'Omar', note: 12 },
];
const total = etudiants.reduce((s, e) => s + e.note, 0);
const moyenne = total / etudiants.length;

// --- TP1 autonome (Catalogue) ---
const produits = [
  { id: 1, nom: "Clavier", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", prix: 240, stock: 3 },
];
const disponibles = produits.filter(p => p.stock > 0);
const valeurTotale = produits.reduce((s, p) => s + p.prix * p.stock, 0);
const moinsCher = disponibles.length > 0 ? disponibles.reduce((min, p) => p.prix < min.prix ? p : min) : null;

export default function App() {
  const [page, setPage] = useState<'notes' | 'catalogue'>('notes');

  return (
    <View style={{flex:1, backgroundColor:'#F2F7FD'}}>

      <View style={styles.menu}>
        <TouchableOpacity onPress={()=>setPage('notes')} style={[styles.btnMenu, page==='notes' && styles.btnActive]}>
          <Text style={[styles.btnText, page==='notes' && styles.btnTextActive]}>TP2 Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setPage('catalogue')} style={[styles.btnMenu, page==='catalogue' && styles.btnActive]}>
          <Text style={[styles.btnText, page==='catalogue' && styles.btnTextActive]}>TP1 Catalogue</Text>
        </TouchableOpacity>
      </View>

      {page === 'notes' ? (
        <View style={styles.ecran}>
          <Text style={styles.titre}>TP2 Guidée - Notes</Text>
          <Text style={styles.moyenne}>Moyenne : {moyenne}/20</Text>
          {etudiants.map((e) => (
            <Text key={e.id} style={styles.ligne}>{e.nom} : {e.note}/20</Text>
          ))}
        </View>
      ) : (
        <View style={styles.ecran}>
          <Text style={styles.titre}>TP1 Autonome - Catalogue</Text>
          <Text style={styles.moyenne}>Disponibles: {disponibles.length}</Text>
          <Text style={styles.moyenne}>Valeur: {valeurTotale} MAD</Text>
          <Text style={styles.moyenne}>Moins cher: {moinsCher ? `${moinsCher.nom} ${moinsCher.prix} MAD` : 'Aucun produit disponible'}</Text>
          <View style={{marginTop:20}}>
            {produits.map(p => (
              <Text key={p.id} style={styles.ligne}>{p.nom} - {p.prix} MAD - {p.stock} unités</Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: { flexDirection:'row', paddingTop:55, padding:12, gap:10, backgroundColor:'#00235C' },
  btnMenu: { flex:1, backgroundColor:'#1e4a9c', padding:10, borderRadius:20, alignItems:'center' },
  btnActive: { backgroundColor:'white' },
  btnText: { color:'white', fontWeight:'bold' },
  btnTextActive: { color:'#00235C' },
  ecran: { flex: 1, justifyContent: 'center', padding: 26, backgroundColor: '#F2F7FD' },
  titre: { fontSize: 24, fontWeight: 'bold', color: '#00235C', marginBottom: 16 },
  moyenne: { fontSize: 19, marginBottom: 10, color: '#003796' },
  ligne: { fontSize: 17, paddingVertical: 8, color: '#00235C' },
});