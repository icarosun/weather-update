<script setup lang="ts">
import { reactive, ref } from "vue";
import { useExcelStore } from "../stores/excelStore.ts";

const store = useExcelStore();

interface DataInfo {
  dataInicial: string;
  dataFinal: string;
  colunaData: string;
}

interface ValoresMedia {
  coluna: string;
  primeiraLinha: number | null;
  ultimaLinha: number | null;
}

interface Media {
  colunaMenor: string;
  colunaMaior: string;
}

interface FormExcel {
  dataInfo: DataInfo;
  valoresMedia: ValoresMedia;
  media: Media;
}

const form = reactive<FormExcel>({
  infoDate: { startDate: "", endDate: "", columnDate: "" },
  elevation: { column: "", firstLine: null, lastLine: null },
  std: { columnMinElevation: "", columnMaxElevation: "" },
});

function validarFormulario(): boolean {
  return (
    form.infoDate.startDate !== "" &&
    form.infoDate.endDate !== "" &&
    form.infoDate.columnDate !== "" &&
    form.elevation.column !== "" &&
    form.elevation.firstLine !== null &&
    form.elevation.lastLine !== null &&
    form.std.columnMinElevation !== "" &&
    form.std.columnMaxElevation !== ""
  );
}

function salvarDados() {
  if (!validarFormulario()) {
    return alert("Por favor, preencha todos os campos corretamente.");
  }

  store.setForm(form);
}
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Configuração de Leitura de Dados (Excel)</h5>
    </div>

    <div class="card-body">
      <form @submit.prevent="salvarDados" novalidate>
        <!-- 1. Informações sobre a data -->
        <h6 class="mt-3 text-primary">1. Informações sobre a Data do prognóstico</h6>
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label">Data inicial</label>
            <input type="date" class="form-control" v-model="form.infoDate.startDate" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Data final</label>
            <input type="date" class="form-control" v-model="form.infoDate.endDate" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Coluna do Excel (Data)</label>
            <input type="text" class="form-control" v-model="form.infoDate.columnDate" placeholder="Ex: A" required />
          </div>
        </div>

        <!-- 2. Valores de média -->
        <h6 class="mt-4 text-primary">2. Previsão da Cota</h6>
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label">Coluna</label>
            <input type="text" class="form-control" v-model="form.elevation.column" placeholder="Ex: B" required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Primeira linha</label>
            <input type="number" class="form-control" v-model.number="form.elevation.firstLine" min="1"
              required />
          </div>
          <div class="col-md-4">
            <label class="form-label">Última linha</label>
            <input type="number" class="form-control" v-model.number="form.elevation.lastLine" min="1" required />
          </div>
        </div>

        <!-- 3. Média -->
        <h6 class="mt-4 text-primary">3. Desvio padrão da cota</h6>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Coluna da cota mínima</label>
            <input type="text" class="form-control" v-model="form.std.columnMinElevation" placeholder="Ex: C" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Coluna da cota máxima</label>
            <input type="text" class="form-control" v-model="form.std.columnMaxElevation" placeholder="Ex: D" required />
          </div>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-success" type="submit">Salvar</button>
        </div>
      </form>

      <div v-if="resultado" class="alert alert-info mt-4">
        <h6>Objeto gerado:</h6>
        <pre>{{ resultado }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
