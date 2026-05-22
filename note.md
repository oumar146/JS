## Optional chaining (?.)
Accéder à une propriété sans erreur si null ou undefined.

user?.profile?.name

## Nullish coalescing (??)
Valeur par défaut seulement si null ou undefined.

let result = condition ?? "default"


## OR (||)
Retourne la première valeur vrai.

0 || 10   // 10
"" || "hi" // "hi"


## AND (&&)
Retourne la première valeur fausse sinon la dernière.

user && user.name
